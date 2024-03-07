function createProjectCardElem(
  title,
  desc,
  imgSrc,
  repoLink,  
  demoLink
) {
  const projectCardElem = document.createElement('div');
  projectCardElem.classList.add('projectCard');

  // Project Photo
  const projectPhoto = new Image();
  projectPhoto.classList.add('projectPhoto')
  projectPhoto.src = imgSrc;
  projectCardElem.appendChild(projectPhoto);

  // Project Info Div
  const projectInfoContainer = document.createElement('div');
  projectInfoContainer.classList.add('projectInfoContainer');
  projectCardElem.appendChild(projectInfoContainer);

  // title
  const projectTitleContainer = document.createElement('div');
  projectTitleContainer.classList.add('projectTitleContainer');
  projectInfoContainer.appendChild(projectTitleContainer);

  // Title & Demo link
  const projectTitleLink = document.createElement('a');
  projectTitleLink.href = demoLink;
  projectTitleLink.innerHTML = title;
  projectTitleContainer.appendChild(projectTitleLink);

  // github link
  const githubLink = document.createElement('a');
  githubLink.href = repoLink;
  githubLink.innerHTML = '<i class="devicon-github-original colored"></i>';
  projectTitleContainer.appendChild(githubLink);

  // desc
  const projectDesc = document.createElement('p');
  projectDesc.innerHTML = desc;
  projectInfoContainer.appendChild(projectDesc);

  return projectCardElem;
}

export default createProjectCardElem;