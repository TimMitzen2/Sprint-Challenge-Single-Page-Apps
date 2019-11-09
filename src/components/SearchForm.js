import React from "react";

export default function SearchForm({ value, handleChange }) {
  return (
    <section className="search-form">
      <form>
        <label htmlFor="name">Search: </label>
        <input
          type="text"
          id="name"
          placeholder="Search"
          value={value}
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
