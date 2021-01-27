import React, { FC } from 'react'
import { debounce } from 'lodash'

type SearchProps = {
  searchQuery: { value: string | null; props: string | null }
  setSearchQuery: (e: any) => void
}

const Search: FC<SearchProps> = ({ searchQuery, setSearchQuery }): JSX.Element => {
  const debouncedOnInput = debounce(onSearchInput, 1000)

  return (
    <div className="container">
      <div className="form-group row margin-top25">
        <select className="form-control col-3" onChange={onSearchSelect}>
          <option value="null" defaultChecked>
            Search by
          </option>
          <option value="video.title">Video title</option>
          <option value="video.url">Video ID</option>
          <option value="guest.nickname">Guest nickname</option>
          <option value="guest.lastname">Guest lastname</option>
        </select>
        <input
          type="email"
          className="form-control col-9"
          placeholder="Insert yours query"
          onChange={(e) => {
            debouncedOnInput(e.target.value)
          }}
        />
      </div>
    </div>
  )

  function onSearchSelect(e: any) {
    const value = e.target.value === 'null' ? null : e.target.value
    setSearchQuery({ ...searchQuery, props: value })
  }

  function onSearchInput(e: string) {
    setSearchQuery({ ...searchQuery, value: e })
  }
}

export default Search
