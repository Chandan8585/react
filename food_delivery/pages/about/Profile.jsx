import React from "react";

class Profile extends React.Component {
  constructor(props) {
    console.log("child constructor");
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidUpdate(prevProps,prevState) {
    // Increment count in componentDidUpdate
    if (prevState.count < 0) {
        this.setState((prevState) => ({
          count: prevState.count + 1,
        }));
    }
    console.log("child component did update");
  }

  componentDidMount() {
    this.setState({
      count: 1,
    });
    console.log("child component did mount");
  }
  componentWillUnmount(){
    console.log("child component will Unmount");
  }
  

  render() {
    const { count } = this.state;
console.log("child component render");
    return (
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Increase Count
        </button>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default Profile;

