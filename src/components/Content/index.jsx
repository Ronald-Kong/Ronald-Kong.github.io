import React from 'react'
import { Space, Table, Tag } from 'antd';
import "./index.scss"
export default function Content() {

    const columns = [
        {
          title: '项目名（点击打开该项目主页）',
          dataIndex: 'name',
          key: 'name',
          render: (_,record) => <a target="_blank" href={record.url}>{record.name}</a>,
        },
        {
          title: 'Stars',
          dataIndex: 'stars',
          key: 'stars',
        },
        {
          title: 'Shares',
          dataIndex: 'shares',
          key: 'shares',
        },
        {
          title: '涉及技术',
          key: 'tags',
          dataIndex: 'tags',
          render: (_, { tags }) => (
            <>
              {tags.map((tag) => {
                return (
                  <Tag color='geekblue' key={tag}>
                    {tag}
                  </Tag>
                );
              })}
            </>
          ),
        },
      ];
      const data = [
        {
          key: '1',
          name: '文章后台管理系统',
          url:"https://github.com/Ronald-Kong/Project_CMS",
          stars: 1,
          shares: 0,
          tags: ['javascript', 'html'],
        },
      ];

  return (
        <div id='content_container'>
            <div id="project_outer_container">
                <span>我的项目</span>
                <div id="project_inner_container">
                <Table columns={columns} dataSource={data} pagination={{position:["bottomCenter"]}}/>
                </div>
            </div>
        </div>
  )
}
