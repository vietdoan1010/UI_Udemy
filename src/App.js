import { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Main from "./components/layout/Main";
import PageNotFound from "./components/layout/PageNotFound";
import { dataCourses, dataViewingStudents } from "./data/dataConfig";
const HomePage = lazy(() => import("./pages/HomePage"));
const CoursesPage = lazy(() => import("./pages/CoursesPage"));
const CourseDetailsPage = lazy(() => import("./pages/CourseDetailsPage"));
const UsersPage = lazy(() => import("./pages/UsersPage"));
const TeachingOnUdemyPage = lazy(() => import("./pages/TeachingOnUdemyPage"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <>
                  <HomePage></HomePage>
                </>
              }
            ></Route>
            <Route
              path="/courses/development/"
              element={<CoursesPage data={dataCourses}></CoursesPage>}
            ></Route>
            <Route
              path="/courses/data-science/"
              element={<CoursesPage data={dataViewingStudents}></CoursesPage>}
            ></Route>
            <Route
              path="/course/learning-python-for-data-analysis-and-visualization/"
              element={<CourseDetailsPage></CourseDetailsPage>}
            ></Route>
            <Route
              path="/user/:userId"
              element={<UsersPage></UsersPage>}
            ></Route>
            <Route
              path="/teaching/"
              element={<TeachingOnUdemyPage></TeachingOnUdemyPage>}
            ></Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
