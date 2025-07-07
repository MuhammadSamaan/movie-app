import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />

        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  )
}
export default Search

// import React from 'react'


// const Search = ({searchTerm, setSearchTerm}) => {
//     return(
//         <div className="search">
//             <div>
//             <img src="search.svg" alt="search" />
//             <input type="text" 
//             placeholder="Search through thousands of movies" 
//             value={searchTerm} 
//             onChange={(event) => setSearchTerm(event.target.value)}
//             name="" id="" />
//         </div>
//         </div>
//     )
// }

// export default Search