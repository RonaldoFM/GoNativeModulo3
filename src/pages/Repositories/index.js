import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as RepositoriesActions }  from "~/store/ducks/repositories";
import { ActivityIndicator } from "react-native";
import { Container } from "./styles";

class Repositories extends Component {
  componentDidMount() {
    const { loadRepositoriesRequest } = this.props;
    loadRepositoriesRequest();
  }
  render() {
    const { repositories } = this.props;
    return (
      <Container>
        {repositories.loading ? (
          <ActivityIndicator size="small" color="#999" />
        ) : (
          repositories.data.map(repository => (
            <Text key={repository.id}>{repository.name} </Text>
          ))
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
  error: state.login.error,
  loading: state.login.loading
});
const mapDispathToToProps = dispatch =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispathToToProps
)(Repositories);
