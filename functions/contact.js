// import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

// export const onRequest = staticFormsPlugin({
//   respondWith: ({ request }) => {
//     console.log("[LOGGING FROM /contact]", request);
//     return await handlePost(request);
//   },
// });


// export async function onRequest(context) {
//   const { request }  = context;
//   console.log(`[LOGGING FROM /contact]: Request came from ${request.url}`);

//   return await handlePost(request);
// }


// export const onRequest = ({ request, env }) => {
//   const SECRET_KEY = env.TURNSTILE_SECRET_KEY;

//   mailChannelsPlugin({
//   personalizations: [
//     {
//       to: [{ name: "Contact Form", email: "" }],
//     },
//   ],
//   from: {
//     name: "Arthur Portfolio",
//     email: "",
//   },
//   respondWith: async () => {
//     return await handlePost(request, SECRET_KEY);
//   },
// });
// };
