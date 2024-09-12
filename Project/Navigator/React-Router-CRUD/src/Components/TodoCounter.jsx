import React from "react";

function TodoCounter({items}) {

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="card shadow-lg">
          <div className="card-body">
            <h1 className="text-center mb-4">Task Count</h1>
                <div className="text-center display-2">
                {items}
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoCounter;
