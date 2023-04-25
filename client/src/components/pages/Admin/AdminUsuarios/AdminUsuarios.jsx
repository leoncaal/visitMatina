import { getAllUsers, updateUsers, clnUpDt } from "../../../../redux/userActions";
import { useSelector , useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const AdminUsuarios = () => {
    
    const dispatch = useDispatch();
    const {users}= useSelector(state => state.user);
    const {upDtRes} = useSelector(state => state.user);

    const[check, setCheck] = useState({
      id_user: null,
      hand: null
    });

    const filterUser = users.filter(user => user.id_user === Number(check.id_user));

    const[inputs, setInputs] = useState({
      id_user: 0,
      admin:null,
      active:null
    });

    useEffect (() => {
        dispatch(getAllUsers());

        if (upDtRes !== ""){
          dispatch(clnUpDt());
        }

    }, [upDtRes]);

    console.log(inputs)

    const handlerCheckAdmin = (event) =>{
      console.log(filterUser[0].id_user)
      if (event.target.checked) {
        setInputs({
          ...inputs,
          [event.target.name]: event.target.value,
          active: filterUser[0].active.toString(),
          id_user: Number(filterUser[0]?.id_user)
        })
      } else{
        setInputs({
          ...inputs,
          [event.target.name]: filterUser[0].admin.toString(),
          id_user: Number(filterUser[0]?.id_user)
        })
      }
    };

    const handlerCheckActive = (event) =>{

      if (event.target.checked) {
        setInputs({
          ...inputs,
          [event.target.name]: event.target.value,
          admin: filterUser[0].admin.toString(),
          id_user: Number(filterUser[0]?.id_user)
        })
      } else{
        setInputs({
          ...inputs,
          [event.target.name]: filterUser[0].active.toString(),
          id_user: Number(filterUser[0]?.id_user)
        })
      }
    };


    const handlerCheck = (event) => {
      if (event.target.checked) {
        setCheck({
          ...check,
          [event.target.name]: event.target.value
        })
      } else{
        setCheck({
          ...check,
          [event.target.name]: ""
        })
        setInputs({
          id_user: 0,
      admin:null,
      active:null
        })
      }
    }

    const handlerUpdate = () => {
      dispatch(updateUsers(inputs));
      setCheck({
        id_user: null,
        hand: false
      })
    }

    return(
        <section>
            <div>
                <h1>AdminUsuarios</h1>
            </div>


          
    {filterUser.map(user => {
        return(  
        <div>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Email</th>
      <th scope="col">Administrador</th>
      <th scope="col">Estado</th>
      <th scope="col">Admin</th>
      <th scope="col">Usuario</th>
      <th scope="col">Activar</th>
      <th scope="col">Inactivar</th>
      <th></th>
      
      <th></th>
    </tr>
  </thead>
  <tbody>
            <tr>
      <th scope="row">{user.id_user}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.admin === true ? "Si" : "No"}</td>
      <td>{user.active === true ? "Activo" : "Inactivo"}</td>
      <td><input className="form-check-input" type="checkbox"  name="admin" value="true" onChange={handlerCheckAdmin} id="flexCheckDefault"></input></td>
      <td><input className="form-check-input" type="checkbox"  name="admin" value="false" onChange={handlerCheckAdmin} id="flexCheckDefault"></input></td>
      <td><input className="form-check-input" type="checkbox"  name="active" value="true" onChange={handlerCheckActive} id="flexCheckDefault"></input></td>
      <td><input className="form-check-input" type="checkbox"  name="active" value="false" onChange={handlerCheckActive} id="flexCheckDefault"></input></td>
      <td>
        <button type="button" className="btn btn-primary" name="id_user" value={user.id_user} onClick={handlerUpdate}>Modificar Usuario</button>
      </td>
      
    </tr>
          </tbody>
</table>
            </div>)
    })}
    










            <div>
            <table className="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Email</th>
      <th scope="col">Administrador</th>
      <th scope="col">Estado</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {users.map(user => {
        return(
            <tr>
      <input className="form-check-input" type="checkbox"  name="id_user" value={user.id_user} onChange={handlerCheck} id="flexCheckDefault" checked={check.hand}></input>
      <th scope="row">{user.id_user}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.admin === true ? "Si" : "No"}</td>
      <td>{user.active === true ? "Activo" : "Inactivo"}</td>
      
    </tr>
        )
    })}
    
  </tbody>
</table>
            </div>
        </section>
    );
}
export default AdminUsuarios;