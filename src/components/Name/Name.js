class Name extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      category: reduxState.category
    };
  }
}
export default Name;