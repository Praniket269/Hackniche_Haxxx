// import * as React from "react";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Stack from "@mui/material/Stack";
// import { styled } from "@mui/material/styles";
// import notes from "../Assets/notes.js";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// export default function Notes() {
//   return (
//     <Box sx={{ width: "100%" }}>
//       <Stack spacing={2}>
//         {notes.map((item, index) => (
//           <Item key={index} sx={{ padding: "1% 5%", textAlign: "left" }}>
//             <b> @{item.username} </b>
//             <p style={{ marginBlock: "0.5em" }}> {item.content} </p>
//           </Item>
//         ))}
//       </Stack>
//     </Box>
//   );
// }