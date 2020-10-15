import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import Popover from "react-tiny-popover";
import Link from "next/link";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Popover
          isOpen={this.state.isPopoverOpen}
          position={"bottom"}
          content={
            <div>
              <Link href={"/accounts"} passHref prefetch={false}>
                <a>Account</a>
              </Link>
            </div>
          }
        >
          <div onClick={() => this.setState({ isPopoverOpen: true })}>
            Click me!
          </div>
        </Popover>
      </div>
    );
  }
}
