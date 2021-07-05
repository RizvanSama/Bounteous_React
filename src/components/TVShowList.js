import React from 'react';

const TVShowList = (props) => {
	
	return (
		<React.Fragment>
			
				{props.finalRecords
					.map((finalRecord, index) => (
						<div className='show-name' key={finalRecord.id}>
							{ finalRecord.imgUrl && <p>{finalRecord.name}</p> }{finalRecord.imgUrl && <img src={finalRecord.imgUrl.medium} alt='movie'></img> }
						</div>
					))}
			
		</React.Fragment>
	);
};

export default TVShowList;
