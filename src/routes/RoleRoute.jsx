import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// configs
import { PATH } from 'configs';

// selectors
import { roleSelector } from 'containers/Auth/Auth.selectors';

const RoleRoute = ({ children, requireRoles = [] }) => {
  const history = useHistory();
  const role = useSelector(roleSelector);

  useEffect(() => {
    if (!role || requireRoles.length === 0) return;

    const checkRole = requireRoles.includes(role);
    if (!checkRole) {
      history.replace(PATH.ERROR_403);
    }
  }, [history, role, requireRoles]);

  return <>{children}</>;
};

export default RoleRoute;
