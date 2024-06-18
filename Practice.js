import Reac, { useEffect } from 'react';

const Practice = () => {
    
    const sortArray = (arr) => {
        let array = [];
        console.log('HERE 1',arr)
        for (let i = 0; i < arr?.length; i++) {
            const elem = arr[i];
            console.log('HERE',typeof elem)
            if (typeof elem === 'object') {
                const currArray = elem?.map((e,index)=>e);
                array = [
                    ...array,
                    ...currArray
                ]
                console.log('TEST arrayy', elem,'elem::',elem)
            } else {
                array.push(elem)
                console.log('TEST elem', elem)
            }
        }
        console.log('finalArray::',array,'arr::',arr);
        return array;
    }
    useEffect(()=>{
        const depth = 2;
        const arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
        let arrayOutput = arr;
        for(let i=0;i<depth;i++){
            arrayOutput = sortArray(arrayOutput);
        }
        console.log('arr input ::',arr,'output::',arrayOutput);
    },[])
    // console.log('sortArray::',sortArray());
    return (
        <>
            <div className='practice_main'>
                <h1>
                    Practice
                </h1>
            </div>

        </>
    )
}
export default Practice;
