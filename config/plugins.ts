// // ./config/env/production/plugins.ts

// export default ({ env }) => ({
//   upload: {
//     config: {
//       provider: "aws-s3",
//       providerOptions: {
//         s3Options: {
//           accessKeyId: env("AWS_ACCESS_KEY_ID"),
//           secretAccessKey: env("AWS_SECRET_ACCESS_KEY"),
//           region: env("AWS_REGION"),
//           params: {
//             // <-- Lỗi của bạn có thể do thiếu object 'params' này
//             Bucket: env("AWS_BUCKET_NAME"),
//           },
//         },
//       },
//     },
//   },
// });
