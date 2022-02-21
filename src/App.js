import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  HowToEarnCashback,
  Product,
  TrendingStores,
  AllBestProducts,
  AllBestDeals,
  Overview,
  PaymentHistory,
  VisitedStores,
  OrderHistory,
  MissingCashback,
  RequestCashback,
  RecentClicks,
  ManageAccount,
  ChangePassword,
  ContactUs,
  Faq,
  CashbackActivated,
  CashbackReward,
  Invite,
  TopCategory,
  TopCategoryID,
  BrandProducts,
  StoreProducts,
} from "./Pages";
import { Footer, Header } from "./components";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import SearchPage from "./Pages/23-Search/SearchPage";
import { loginModalToggle } from "./store/actions/Login-actions";

const App = () => {
  // const [showLogin, setshowLogin] = useState("close");
  const [modalComponent, setModalComponent] = useState("email");
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const showLogin = useSelector((state) => state.loginModalStatus.showLogin);
  const { userInfo } = userLogin;

  const handleChange = (e, component) => {
    console.log(component, e);
    e.preventDefault();
    // if (e.target !== e.currentTarget) {
    //   return;
    // }
    setModalComponent(component);
  };

  const handleClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    e.preventDefault();

    switch (showLogin) {
      case "open":
        dispatch(loginModalToggle("close"));
        !isMobile && (document.body.style.overflow = "unset");
        break;
      case "close":
        dispatch(loginModalToggle("open"));
        !isMobile && (document.body.style.overflow = "hidden");
        break;
      default:
        dispatch(loginModalToggle("close"));
        !isMobile && (document.body.style.overflow = "unset");
        break;
    }
  };

  useEffect(() => {
    if (userInfo) {
      if (showLogin === "open") {
        dispatch(loginModalToggle("close"));
        !isMobile && (document.body.style.overflow = "unset");
      }
    }
  }, [userInfo]);

  return (
    <Router>
      <Header
        showLogin={showLogin}
        handleClick={handleClick}
        modalComponent={modalComponent}
        handleChange={handleChange}
      />
      <main>
        <Switch>
          <Route path="/store/:slug/:id/" component={StoreProducts} />
          <Route path="/brand/:slug/:id/" component={BrandProducts} />
          <Route path="/search" component={SearchPage} />
          <Route path="/category/:slug/:id/" component={TopCategoryID} />
          <Route path="/top-categories" component={TopCategory} />
          <Route path="/invite" component={Invite} />
          <Route
            path="/cashback-reward"
            render={() => (
              <CashbackReward
                handleClick={handleClick}
                handleChange={handleChange}
              />
            )}
          />
          <Route path="/cashback-activated" component={CashbackActivated} />
          <Route path="/frequenty-asked-question" component={Faq} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/change-password" component={ChangePassword} />
          <Route path="/manage-account" component={ManageAccount} />
          <Route path="/recent-clicks" component={RecentClicks} />
          <Route path="/request-cashback" component={RequestCashback} />
          <Route path="/missing-cashback" component={MissingCashback} />
          <Route path="/order-history" component={OrderHistory} />
          <Route path="/visited-stores" component={VisitedStores} />
          <Route path="/payment-history" component={PaymentHistory} />
          <Route path="/overview" component={Overview} />
          <Route path="/all-best-deals" component={AllBestDeals} />
          <Route path="/all-best-products" component={AllBestProducts} />
          <Route path="/trending-stores" component={TrendingStores} />
          <Route path="/how-to-earn-cashback" component={HowToEarnCashback} />
          <Route path="/product/:slug/:id" component={Product} />
          <Route path="/" exact component={Home} />
        </Switch>
      </main>
      <Footer showLogin={showLogin} handleClick={handleClick} />
    </Router>
  );
};

export default App;
