import Header from "../../pages/header";
import Footer from "../../pages/footer";

function Layout(props) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout;