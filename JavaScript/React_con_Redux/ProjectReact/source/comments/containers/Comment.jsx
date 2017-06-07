import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';

import styles from './Comment.css';

function Comment(props) {
  return (
    <article id={`comment-${props.id}`} className={styles.comment}>
      <p className={styles.body}>
        {props.body}
      </p>

      <div className={styles.meta}>
        <FormattedHTMLMessage
          id="comment.meta.autor"
          values={{
            email: props.email,
            name: props.name,
          }}
        />
      </div>
    </article>
  );
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Comment;
