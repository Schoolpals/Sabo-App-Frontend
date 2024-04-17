import React, { useState } from 'react';

type IntroProps = {

};

const Intro: React.FC<IntroProps> = () => {
    const [currentPage, setCurrentPage] = useState(1)
    return <div>
        {currentPage == 1 && <></>}
    </div>
}
export default Intro;