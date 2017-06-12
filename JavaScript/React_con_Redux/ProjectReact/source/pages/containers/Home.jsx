import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import Post from '../../posts/containers/Post';
import Loading from '../../shared/components/Loading';
import Title from '../../shared/components/Title';

import api from '../../api';

import styles from './Page.css';

import actions from '../../actions';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  async componentDidMount() {
    if (this.props.posts.size === 0) {
      await this.props.actions.postsNextPage();
    }
    this.initialFetch();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  async initialFetch() {
    const posts = await api.posts.getList(this.props.page);

    this.props.dispatch(
      actions.setPost(posts),
    );

    this.setState({ loading: false });
  }

  handleScroll() {
    if (this.state.loading) return null;

    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;

    if (!(scrolled + viewportHeight + 300 >= fullHeight)) {
      return null;
    }

    return this.setState({ loading: true }, async () => {
      try {
        const posts = await api.posts.getList(this.props.page);

        this.props.dispatch(
          actions.setPost(posts),
        );

        this.setState({
          loading: false,
          error: null,
        });
      } catch (error) {
        this.setState({
          loading: false,
          error: error.message,
        });
      }
    });
  }

  render() {
    return (
      <section name="Home" className={styles.section}>
        <Title>
          <FormattedMessage id="title.home" />
        </Title>

        <section className={styles.list}>
          {this.props.posts
            .map(post => <Post key={post.id} {...post} />)
          }
          {this.state.loading && (
            <Loading />
          )}
          {this.state.error && (
            <h4>{this.state.error}</h4>
          )}
        </section>
      </section>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func,
  posts: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.number,
};

Home.defaultProps = {
  dispatch: {},
  posts: {},
  page: {},
};

function mapStateToProps(state) {
  return {
    posts: state.posts.entities,
    page: state.posts.page,
  };
}
/*
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
*/

export default connect(mapStateToProps)(Home);
