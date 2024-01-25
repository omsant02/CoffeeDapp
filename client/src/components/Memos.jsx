import { useState, useEffect } from "react";
const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;
  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
      //console.log(memos)
    };
    contract && memosMessage();
  }, [contract]);

  return (
    <>
      {memos.map((memo) => {
        return (
          <div>
            <p>{memo.name}</p>
            <p>{memo.message}</p>
            <p>{memo.timestamp}</p>
            <p>{memo.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default Memos;
