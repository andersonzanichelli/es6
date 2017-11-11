var users = [
  { name: 'Jill'},
  { name: 'Alex'},
  { name: 'Bill'}
]

users.find((x) => x.name === 'Jill');

const posts = [
  { id: 1, title: 'New post'},
  { id: 2, title: 'Old post'}
];

var comment = { postId: 1, content: 'Great post'};

function postForComment(posts, comment) {
  return posts.find((p) => p.id === comment.postId);
}

function findWhere(array, criteria) {
  return array.find((x) => x[Object.keys(criteria)[0]] === criteria[Object.keys(criteria)[0]])
}

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

findWhere(ladders, { height: 25 });

function unique(array) {
	return array.reduce((acc, x) => {
     if(acc.find(y => y === x))
        return acc;
    acc.push(x);
  	return acc;
  }, []);
}
