import { useState } from "react"

export const useModalController = () => {

const [CreateState, setCreateState] = useState(false);
const [EditState, setEditState] = useState(false);
const [DeleteState, setDeleteState] = useState(false);

const openCloseDeleteModal = ()=>{
  setDeleteState(!DeleteState);
}
  const openCloseCreateModal =()=>{
    setCreateState(!CreateState);
  }

  const openCloseEditModal = () => {

    setEditState(!EditState);
  }
  return{ 
        openCloseCreateModal,
        CreateState,

        
        openCloseEditModal,
        EditState,
        setEditState,

        openCloseDeleteModal,
        DeleteState
  }
}
