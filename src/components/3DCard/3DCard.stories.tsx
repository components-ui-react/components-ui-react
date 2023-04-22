import DCard from '.';

export default {
  title: 'Input Group/DCard',
};

export const tridimensionalCard = () => {
  return (
    <DCard height='200px' width='200px'>
      <svg
        width='800px'
        height='800px'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M20 10V14M6.5 10V14M4 9V15C4 15.5523 4.44772 16 5 16H17C17.5523 16 18 15.5523 18 15V9C18 8.44772 17.5523 8 17 8H5C4.44772 8 4 8.44772 4 9Z'
          stroke='#1d00f4'
        />
      </svg>
    </DCard>
  );
};
