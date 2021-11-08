import React, { useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const LandingPage = (props) => {
    const onClickHandler = () => {
        axios.get('/api/users/logout').then((response) => {
            if (response.data.success) {
                props.history.push('/login');
            } else {
                alert('로그아웃 하는데 실패 했습니다.');
            }
        });
    };
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
            }}
        >
            <h1>시작 페이지</h1>
        </div>
    );
};

export default withRouter(LandingPage);
