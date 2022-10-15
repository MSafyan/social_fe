// import FeatherIcon from 'feather-icons-react';
// import { useState } from 'react';
import LanguageSelector from './languageSelector';

function Detail({ description, options }) {
	// const [fill, setFill] = useState(false);

	return (
		<div className='detail-box'>
			<p>{description}</p>

			<LanguageSelector q={description} options={options} />
			{/* <div onClick={() => setFill(!fill)} className={`bookmark ${fill&&'active'} favourite-btn`}>
                <FeatherIcon
                    icon="bookmark" size={14}
                />
            </div> */}
		</div>
	);
}

export default Detail;
