import React from 'react';

const List3 = ({ no = 0, title = "제목없음", content = "내용없음" }) => {

  return (
    <div>
      <h3>{no}. {title}</h3>
      <p>{content} </p>
      <hr />
    </div>
  )
}

export default List3;