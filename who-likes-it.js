// Description:
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

function likes(names) {
  if (names.length === 1) {
    return `${names} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  } else {
    return 'no one likes this';
  }
}

// Other solutions

function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
}

function likes(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return 'no one likes this';
      break;
    case 1:
      return names[0] + ' likes this';
      break;
    case 2:
      return names[0] + ' and ' + names[1] + ' like this';
      break;
    case 3:
      return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
      break;
    default:
      return (
        names[0] +
        ', ' +
        names[1] +
        ' and ' +
        (names.length - 2) +
        ' others like this'
      );
  }
}
