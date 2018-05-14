/**
 * Created by Rossy1 on 2018/5/7.
 */
import React, {Component} from 'react';
import {Table, Pagination} from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';

const columns = [
    {
        title: 'Name',
        dataIndex: 'NickName',
    }, {
        title: 'Age',
        dataIndex: 'UID',
    }, {
        title: 'Address',
        dataIndex: 'City',
    }];
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }
}
class router1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: [], //总数据
            data: [], //表格当前页数据
            length: 0 //总数据长度
        }
    }
    componentDidMount() {
        axios.get("xxxxxx").then(res => {
            console.log(res.data);
            this.setState({
                allData: res.data,
                data: res.data.slice(0, 3),
                length: res.data.length
            });
        });
    }
    onChange(pageNumber) {
        console.log("Page: ", pageNumber);
        this.setState({
            data: this.state.allData.slice((pageNumber - 1) * 3, 3 * pageNumber)
        });
    }
    clickRow(record){
        return {
            onClick: () => { //点击行
                console.log(record)
            }
        }
    }
    render() {
        return (
            <div className="App">
                <Table rowKey="UID" rowSelection={rowSelection} columns={columns} dataSource={this.state.data} onRow={this.clickRow}/>
                <Pagination defaultCurrent={1} defaultPageSize={3} total={this.state.length} className="pages"
                            showQuickJumper onChange={this.onChange.bind(this)}/>
            </div>
        )
    }
}

export default router1;
