import { useState } from "react";

function useList(init) {
  const [list, setList] = useState(init);

  return {
    list,
    removeItem(item) {
      const filterlist = list.filter((v) => v.name !== item);
      setList(filterlist);
    },
    saveItem(index, newVal) {
      const copyList = [...list];
      copyList[index].name = newVal;
    },
  };
}

export default useList;
