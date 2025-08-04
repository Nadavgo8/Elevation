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

getUserById(3); // ✅ Valid ID
getUserById(4); // ✅ Valid ID
getUserById(3); // ✅ Valid ID
getUserById(9); // ✅ Valid ID
getUserById(999); // ❌ Invalid ID, triggers catch block

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
