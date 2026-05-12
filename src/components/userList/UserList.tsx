import { FixedSizeList as List } from "react-window";

const users = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: `User ${i}`,
}));

type RowProps = {
  index: number;
  style: React.CSSProperties;
};

const Row = ({ index, style }: RowProps) => {
  const user = users[index];

  return (
    <div
      style={{
        ...style,
        borderBottom: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        paddingLeft: "16px",
      }}
    >
      {user.name}
    </div>
  );
};

const UserList = () => {
  return (
    <List height={500} width={400} itemCount={users.length} itemSize={50}>
      {Row}
    </List>

    // <div>
    //   {users.map((user) => (
    //     <div
    //       key={user.id}
    //       style={{
    //         borderBottom: "1px solid #ddd",
    //         display: "flex",
    //         alignItems: "center",
    //         paddingLeft: "16px",
    //         height: "50px",
    //       }}
    //     >
    //       {user.name}
    //     </div>
    //   ))}
    // </div>
  );
};

export default UserList;
