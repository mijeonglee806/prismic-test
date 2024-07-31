const fs = require('fs');

// Assuming the webhook payload is passed as an environment variable
const webhookPayload = JSON.parse(process.env.WEBHOOK_PAYLOAD);

// Extract the video data (adjust this according to your actual data structure)
const videoData = webhookPayload.video;
if (!videoData) {
  console.error('No video data found in the payload');
  process.exit(1);
}

// Save the video data to a file in the repository
fs.writeFileSync('./video-data.json', JSON.stringify(videoData, null, 2));

console.log('Video data saved successfully');