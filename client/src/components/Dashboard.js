// import { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Dashboard = () => {
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [description, setDescription] = useState("");
//   const [content, setContent] = useState("");
//   const [source, setSource] = useState("");
//   const [image, setImage] = useState("");
//   const [category, setCategory] = useState("");
//   const [language, setLanguage] = useState("");
//   const [country, setCountry] = useState("");

//   axios.defaults.withCredentials = true;
//   const addNewArticle = (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append("title", title);
//     data.append("author", author);
//     data.append("description", description);
//     data.append("content", content);
//     data.append("source", source);
//     data.append("image", image);
//     data.append("category", category);
//     data.append("language", language);
//     data.append("country", country);

//     // const data = {
//     //   title,
//     //   author,
//     //   description,
//     //   content,
//     //   source,
//     //   image,
//     //   category,
//     //   language,
//     //   country,
//     // };
//     console.log(data);
//     axios
//       .post("http://localhost:5000/dashborad/article/add/", data, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((res) => {
//         console.log(res);
//       });
//   };
//   const uploadHandel = (e) => {
//     setImage(e.target.files[0]);
//   };

//   return (
//     <div>
//       <div className="signUpWrapper">
//         <h3>Add New Article in Nuntium</h3>
//         <form className="formFather">
//           <div className="inputFather">
//             <label>Title :</label>
//             <input
//               className="title"
//               type="text"
//               value={title}
//               name="title"
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder="title"
//             />
//           </div>
//           <div className="inputFather">
//             <label>Author :</label>
//             <input
//               className="author"
//               type="text"
//               value={author}
//               name="author"
//               onChange={(e) => setAuthor(e.target.value)}
//               placeholder="Author"
//             />
//           </div>
//           <div className="inputFather">
//             <label>Description :</label>
//             <input
//               className="description"
//               type="text"
//               value={description}
//               name="description"
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="description"
//             />
//           </div>

//           <div className="inputFather">
//             <label>Content :</label>
//             <input
//               className="content"
//               type="text"
//               value={content}
//               name="content"
//               onChange={(e) => setContent(e.target.value)}
//               placeholder="content"
//             />
//           </div>
//           <div className="inputFather">
//             <label>Source :</label>
//             <input
//               className="source"
//               type="text"
//               value={source}
//               name="source"
//               onChange={(e) => setSource(e.target.value)}
//               placeholder="source"
//             />
//           </div>
//           <div className="inputFather">
//             <label>Image :</label>
//             <input
//               className="image"
//               type="file"
//               name="image"
//               onChange={uploadHandel}
//               placeholder=""
//             />
//           </div>
//           <div className="inputFather">
//             <label>Category :</label>
//             <input
//               className="category"
//               type="text"
//               value={category}
//               name="category"
//               onChange={(e) => setCategory(e.target.value)}
//               placeholder="category"
//             />
//           </div>
//           <div className="inputFather">
//             <label>Language :</label>
//             <input
//               className="language"
//               type="text"
//               value={language}
//               name="language"
//               onChange={(e) => setLanguage(e.target.value)}
//               placeholder="language"
//             />
//           </div>
//           <div className="inputFather">
//             <label>Country :</label>
//             <input
//               className="country"
//               type="password"
//               value={country}
//               name="country"
//               onChange={(e) => setCountry(e.target.value)}
//               placeholder="country"
//             />
//           </div>

//           <div>
//             <button className="submit" onClick={addNewArticle}>
//               Add New Article
//             </button>
//           </div>
//           <Link to="/home" className="submit">
//             Home
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
