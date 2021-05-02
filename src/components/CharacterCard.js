import React from 'react';

export default function CharacterCard({ characters }) {
  const handleCharacer = (name) => {
    console.log(name);
  };

  return (
    <>
      {' '}
      {characters.length !== 0 && (
        <section className="character_grid">
          {characters.results.map((character, i) => (
            <figure onClick={() => handleCharacer(character.name)} key={i}>
              <img
                className="avatar mb"
                src="http://isgpp.com.ng/wp-content/uploads/bfi_thumb/isgpp_avatar_placeholder-nn13xxddqb4k2et3buosj68bh92wogalq28zpaeioo.png"
                alt={character.name}
                title={character.name}
              />
              <figcaption className="user-name mb">{character.name}</figcaption>
            </figure>
          ))}

          {/* <div
      v-for="leader in leaders"
      :key="leader.user.id"
      class="user-card"
      @click="handleUser(leader.user.id)"
    >
      <img
        class="avatar mb"
        :src="leader.user.photo"
        :alt="leader.user.display_name"
        :title="leader.user.display_name"
      />
      <h1 class="user-name mb">{{ leader.user.display_name }}</h1>
      <p class="rank mb">Rank: {{ leader.rank }}</p>
      <p class="rank mb">
        Total Hours Coded: {{ leader.running_total.human_readable_total }}
      </p>
      <p class="rank mb">
        Daily Average: {{ leader.running_total.human_readable_total }}
      </p>
      <p class="lang-wrapper">
        Languages Used: <br />
        <span
          v-for="language in leader.running_total.languages"
          :key="language.name"
          class="lang mb"
        >
          {{ language.name }}
        </span>
      </p>
    </div> */}
        </section>
      )}
    </>
  );
}
