
import { Link, NavLink } from 'react-router-dom';

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './SidMenuStyle.scss';

export const SidMenu = () => {
  return (
    <>

      <ProSidebar className="sidebar">
        <Menu iconShape="square">
          <MenuItem  ><p className='sidebar-Title'>ISP</p></MenuItem>
            <hr/>
            <MenuItem>Mantenimiento Paciente<Link to='/mantenimiento_paciente' /></MenuItem>
            <MenuItem>Reporte <Link to='/reporte' /></MenuItem>
            <MenuItem>Atenciones<Link to='/atenciones' /></MenuItem>


          
        </Menu>
      </ProSidebar>

    </>
  )
}
