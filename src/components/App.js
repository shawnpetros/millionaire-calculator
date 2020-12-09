import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import Calc from "./Calc";

function App() {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ textAlign: "center" }}>
          <Title style={{ color: "white", margin: 0, lineHeight: "64px" }}>
            So You Wanna Be A Millionaire?!
          </Title>
        </Header>
        <Content style={{ padding: "0 50px", margin: "50px 0" }}>
          <Calc />
          <Calc />
        </Content>
        <Footer style={{ backgroundColor: "darkgray" }}></Footer>
      </Layout>
    </>
  );
}

export default App;
