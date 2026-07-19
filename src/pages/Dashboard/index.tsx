// import { useTheme } from "../../hooks/useTheme";


// function Dashboard() {
//     const {
//         theme,
//         resolvedTheme,
//         toggleTheme,
//         setTheme,
//     } = useTheme();

//     return (
//         <div className="fo-container fo-p-6">
//             <h1 className="fo-page-title">Dashboard</h1>

//             <div className="fo-mt-6">
//                 <p className="fo-body">
//                     <strong>Selected Theme:</strong> {theme}
//                 </p>

//                 <p className="fo-body fo-mt-2">
//                     <strong>Resolved Theme:</strong> {resolvedTheme}
//                 </p>
//             </div>

//             <div className="fo-flex fo-gap-3 fo-mt-6">
//                 <button onClick={toggleTheme}>
//                     Toggle Theme
//                 </button>

//                 <button onClick={() => setTheme("light")}>
//                     Light
//                 </button>

//                 <button onClick={() => setTheme("dark")}>
//                     Dark
//                 </button>

//                 <button onClick={() => setTheme("system")}>
//                     System
//                 </button>
//             </div>


//         </div>
//     );
// }

// export default Dashboard;

export * from "./Dashboard"
export * from "./Dashboard.types"