import { useState, useEffect } from "react";
import "./Memos.css";
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

  // return (
  //   <>
  //     {memos.map((memo, index) => (
  //       <div key={index}>
  //         <p>{memo.name}</p>
  //         <p>{memo.message}</p>
  //         <p>{memo.timestamp}</p>
  //         <p>{memo.name}</p>
  //       </div>
  //     ))}
  //   </>
  // );
  return (
    <div className="container-fluid">
      <h3 style={{ textAlign: "center", marginTop: "20px" }}>Messages</h3>
      <table>
        <tbody>
          {memos.map((memo) => {
            return (
              <tr>
                <td
                  style={{
                    backgroundColor: "dodgerblue",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "7px",
                    width: "100px",
                    color: "white",
                  }}
                >
                  {memo.name}
                </td>
                <td
                  style={{
                    backgroundColor: "dodgerblue",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "7px",
                    width: "800px",
                    color: "white",
                  }}
                >
                  {memo.timestamp}
                </td>
                <td
                  style={{
                    backgroundColor: "dodgerblue",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "7px",
                    width: "300px",
                    color: "white",
                  }}
                >
                  {memo.message}
                </td>
                <td
                  className="container-fluid"
                  style={{
                    backgroundColor: "dodgerblue",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "7px",
                    width: "400px",
                    color: "white",
                  }}
                >
                  {memo.from}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Memos;
