import React from 'react';
import 'antd/dist/antd.css';
import { Upload, Icon } from 'antd';
import { getBase64, beforeUpload } from './utils';


// This component shows a simple use of Antd Upload Component.
// More details about its implementation and attributes could be found at
// https://ant.design/components/upload/
class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(info) {
        const { file: { originFileObj, status } } = info;
        if (status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (status === 'done') {
            getBase64(originFileObj, (imageUrl) => this.setState({
                imageUrl,
                loading: false,
            }));
        }
    }

    render() {
        const mockedEndpoint = 'https://www.mocky.io/v2/5cc8019d300000980a055e76';
        const { loading } = this.state;
        const uploadButton = (
            <div>
                <Icon type={loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        return (
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action={mockedEndpoint}
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
        );
    }
}

export default Avatar;
