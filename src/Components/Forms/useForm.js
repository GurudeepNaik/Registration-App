import { useState } from "react";
function useForm(initialState) {
  const [initialData, setinitialData] = useState(initialState);

  const onChangeHandler = (e) => {
    setinitialData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const onSubmitHandler = () => {
    setinitialData(initialState);
  };

  return [initialData, onChangeHandler, onSubmitHandler];
}
export default useForm;
