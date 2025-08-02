function processFile(filename, processingTime) {
  return new Promise((resolve, reject) => {
    console.log(`Starting to process ${filename}...`);

    setTimeout(() => {
      // 15% chance of failure for realistic simulation
      if (Math.random() < 0.15) {
        reject(new Error(`Failed to process ${filename}`));
      } else {
        const result = {
          filename: filename,
          size: Math.floor(Math.random() * 1000) + 100, // Random size
          processedAt: new Date().toLocaleTimeString(),
        };
        console.log(`✓ Completed ${filename}`);
        resolve(result);
      }
    }, processingTime);
  });
}

// TODO: Use Promise.all() to process these files concurrently:
const files = [
  { name: "document1.pdf", time: 2000 },
  { name: "image1.jpg", time: 1500 },
  { name: "data.csv", time: 3000 },
  { name: "report.docx", time: 1000 },
];

// TODO:
// 1. Create an array of promises using the files array
// 2. Use Promise.all() to wait for all files to complete
// 3. Log total processing time and all results
// 4. Handle the case where any file fails

// Bonus: Try Promise.allSettled() to see results even if some files fail

const start = Date.now();

const promises = files.map((file) => processFile(file.name, file.time));

Promise.all(promises)
  .then((results) => {
    const totalTime = (Date.now() - start) / 1000;
    console.log(`\n✅ All files processed in ${totalTime.toFixed(2)} seconds:`);
    console.log(results);
  })
  .catch((error) => {
    const totalTime = (Date.now() - start) / 1000;
    console.error(
      `\n❌ Error after ${totalTime.toFixed(2)} seconds:`,
      error.message
    );
  });

// Promise.allSettled(promises).then((results) => {
//   const totalTime = (Date.now() - start) / 1000;
//   console.log(`\n📝 All files completed in ${totalTime.toFixed(2)} seconds.`);

//   results.forEach((result, i) => {
//     const { name } = files[i];
//     if (result.status === "fulfilled") {
//       console.log(`✓ ${name} processed successfully:`, result.value);
//     } else {
//       console.log(`✗ ${name} failed:`, result.reason.message);
//     }
//   });
// });
