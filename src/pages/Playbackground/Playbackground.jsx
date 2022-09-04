import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// action
import { enqueueSnackbarAction } from 'App/App.actions';
import { fetchTodo } from 'apis/common.api';

function Playbackground() {
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState(1);
  const isLoading = useSelector((state) => state.app.isLoading);

  function checkSnackBar() {
    dispatch(
      enqueueSnackbarAction({
        message: 'Check snackbar Successful!',
        key: new Date().getTime() + Math.random(),
        variant: 'success',
      }),
    );
  }

  const todos = () => {
    fetchTodo('https://jsonplaceholder.typicode.com/todos');
  };

  return (
    <div>
      {isLoading ? 'loading...' : 'pass'}
      <h3>Cancel Request: Please open Network tab.</h3>
      Pagination: {pagination}
      <br />
      {/* id: {data && data.id} */}
      <br />
      {/* title: {data && data.title} */}
      <br />
      <button type="button" onClick={todos}>
        Please click multi time
      </button>
      <h3>Show snackbar</h3>
      <button type="button" onClick={checkSnackBar}>
        Click here
      </button>
    </div>
  );
}

export default Playbackground;
