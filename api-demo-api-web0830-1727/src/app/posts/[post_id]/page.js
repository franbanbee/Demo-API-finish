//https://localhost:3001/posts/1

// 設定子頁面title會變動 但是要一樣的描述
export function generateMetadata({params}){
return{
    title : `Post ${params.post_id}`,
    description : 'Post test'
}
}

const Post = ({params}) =>{
    const post_id = params.post_id
    // 測試錯誤畫面
    // throw new Error('Error Test');
    return <div>Post{post_id}</div>;
    
};

export default Post;