import { lazy } from "react";
const Home = lazy(() => import("../components/Home"));
const Login = lazy(() => import("../components/Login"));
const Signup = lazy(() => import("../components/Signup"));
const Result = lazy(() => import("../components/Result"));
const PageNotFound = lazy(() => import("../components/PageNotFound"));
export { Home, Login, Signup, Result, PageNotFound };
