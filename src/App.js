import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TVShowList from './components/TVShowList';
import SearchBox from './components/SearchBox';

const App = () => {
	const [tvShows, setTvShows] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getTVShowNames = async (searchValue) => {
		const url = ` http://api.tvmaze.com/search/shows?q=${searchValue}`;
		fetch(url)
		  .then(response => {
			if (!response.ok) {
			  throw new Error('Could not fetch person!');
			}
			return response.json();
		  })
		  .then(tvData => {
			setTvShows(tvData);
			//console.log(tvData);
		  })
		  .catch(err => {
			console.log(err);
		  });
	  };git init

	useEffect(() => {
		getTVShowNames(searchValue);
	}, [searchValue]);

	const filterPrices = [...tvShows];

    let filtered = [];

	filterPrices.filter(function(newData) {
			return filtered.push({
			  id: newData.show.id,
			  name: newData.show.name,
			  imgUrl: newData.show.image,
			});
	  });

    // sort array by TV show name
    filtered.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    const finalRecords = [...filtered];
    //console.log(finalRecords);
	
	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
			<div className='col'>
				<h1>TV Shows List</h1>
			</div>
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<TVShowList
					finalRecords = {finalRecords}
				/>
			</div>
		</div>
	);
};

export default App;
