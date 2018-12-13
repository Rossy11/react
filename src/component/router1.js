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
            data: [], //表格当前页数据
            length: 0 //总数据长度
        }
    }
    componentDidMount() {
        this.getData(1)
    }
    getData(e){
        axios.get("xxx/?page="+e).then(res => {
            let result=res.data;
            this.setState({
                data: result.results,
                length: result.count
            });
        });
    }
    onChange(pageNumber) {
        console.log("Page: ", pageNumber);
        this.getData(pageNumber)
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
                <Pagination defaultCurrent={1} defaultPageSize={10} total={this.state.length} className="pages"
                            showQuickJumper onChange={this.onChange.bind(this)}/>
            </div>
        )
    }
}

export default router1;
