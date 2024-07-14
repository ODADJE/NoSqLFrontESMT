import { useCallback, useEffect, useState } from 'react';
import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from '../../actions/user.actions';
import ContentHeader from '../../components/ContentHeader';
import DataTable from '../../components/DataTable';
import Modal from '../../components/Modal';
import { useFeedback } from '../../contexts/FeedbackContext';
import UserForm from '../../components/UserForm';
import Loading from '../../components/Loading';

function User() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const { showToast } = useFeedback();

  const handleOpenModal = () => {
    document.getElementById('my_modal_3').showModal();
  };

  const handleSubmitUser = async (data, reset) => {
    setLoading(true);
    try {
      if (user) {
        await updateUser(data, user?._id);
        showToast({ type: 'success', message: 'user updated' });
      } else {
        await createUser(data);
        showToast({ type: 'success', message: 'user created' });
      }
      await GetAllUsers();
    } catch (error) {
      showToast({ type: 'error', message: error.message });
    } finally {
      setLoading(false);
      reset();
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    const decision = window.confirm(
      'Are you sure you want to delete this user?'
    );
    try {
      if (decision) {
        await deleteUser(id);
        showToast({ type: 'success', message: 'user deleted' });
      }
      await GetAllUsers();
    } catch (error) {
      showToast({ type: 'error', message: error.message });
    } finally {
      setLoading(false);
    }
  };

  const GetAllUsers = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllUsers();
      setUsers(data?.user);
      showToast({
        type: 'success',
        message: 'All done!',
      });
    } catch (error) {
      showToast({
        type: 'error',
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  useEffect(() => {
    GetAllUsers();
  }, [GetAllUsers]);

  return (
    <div>
      <ContentHeader title="User" func={handleOpenModal} haveButton />
      {loading ? (
        <Loading />
      ) : (
        <DataTable
          data={users}
          columns={['email', 'name', 'role', 'createdAt']}
          handleDelete={handleDelete}
          set={setUser}
          handleOpenModal={handleOpenModal}
        />
      )}
      <Modal>
        <UserForm
          submit={handleSubmitUser}
          user={user || null}
          update={!!user}
          setUser={setUser}
        />
      </Modal>
    </div>
  );
}

export default User;
