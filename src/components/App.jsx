import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';

const Home = lazy(() => import('../Pages/Home/Home'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Pages/Cast/Cast'));
const Reviews = lazy(() => import('../Pages/Reviews/Reviews'));

function App() {
  return (
    <Router basename="/">
      <div>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
