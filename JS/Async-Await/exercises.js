//ex1

// Convert the function to use async/await syntax
// Use try/catch for error handling
// Maintain the same functionality (logging and return values)
// Test with both valid (1-10) and invalid (999) user IDs

// function getUserById(userId) {
//   return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("User not found");
//       }
//       return response.json();
//     })
//     .then((user) => {
//       console.log(`Found user: ${user.name} (${user.email})`);
//       return user;
//     })
//     .catch((error) => {
//       console.error("Error fetching user:", error.message);
//       return null;
//     });
// }

async function getUserById(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!response.ok) {
      throw new Error("User not found");
    }

    const user = await response.json();
    console.log(`Found user: ${user.name} (${user.email})`);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
}

// getUserById(3); // ✅ Valid ID
// getUserById(4); // ✅ Valid ID
// getUserById(3); // ✅ Valid ID
// getUserById(9); // ✅ Valid ID
// getUserById(999); // ❌ Invalid ID, triggers catch block

async function getUserWithPosts(userId) {
  try {
    // Step 1: Fetch user
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!userResponse.ok) {
      throw new Error("User not found");
    }

    const user = await userResponse.json();

    // Step 2: Fetch posts
    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    if (!postsResponse.ok) {
      throw new Error("Failed to fetch posts for user");
    }

    const posts = await postsResponse.json();

    // Step 3: Return combined data
    return {
      user,
      posts,
    };
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}

// getUserWithPosts(1).then(data => console.log(data));   // ✅ Should return user and posts
// getUserWithPosts(999).then(data => console.log(data)); // ❌ User not found → returns null


//ex3
async function generateDashboardData() {
  try {
    // Step 1 - Fetch in parallel
    const [usersRes, postsRes, commentsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/comments"),
    ]);

    const [users, posts, comments] = await Promise.all([
      usersRes.json(),
      postsRes.json(),
      commentsRes.json(),
    ]);

    // Step 2 - Summary data
    const totalUsers = users.length;
    const totalPosts = posts.length;
    const totalComments = comments.length;

    const avgPostsPerUser = totalPosts / totalUsers;
    const avgCommentsPerPost = totalComments / totalPosts;

    // Step 3 - Top 3 users by post count
    const postCountMap = {};
    users.forEach((user) => {
      postCountMap[user.id] = {
        name: user.name,
        postCount: 0,
        commentCount: 0,
      };
    });

    posts.forEach((post) => {
      if (postCountMap[post.userId]) {
        postCountMap[post.userId].postCount += 1;
      }
    });

    comments.forEach((comment) => {
      const post = posts.find((p) => p.id === comment.postId);
      if (post && postCountMap[post.userId]) {
        postCountMap[post.userId].commentCount += 1;
      }
    });

    const topUsers = Object.values(postCountMap)
      .sort((a, b) => b.postCount - a.postCount)
      .slice(0, 3);

    // Step 4 - Recent 5 posts (by highest ID)
    const recentPosts = posts.sort((a, b) => b.id - a.id).slice(0, 5);

    // Step 5 - Return final structure
    return {
      summary: {
        totalUsers,
        totalPosts,
        totalComments,
        avgPostsPerUser,
        avgCommentsPerPost,
      },
      topUsers,
      recentPosts,
    };
  } catch (error) {
    console.error("Error generating dashboard data:", error.message);
    return null;
  }
}
generateDashboardData().then((data) =>
  console.log(JSON.stringify(data, null, 2))
);
