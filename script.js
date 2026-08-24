/**
 * Interactive resource orbit.
 * Hover, keyboard focus and click all activate the selected channel.
 */

const resources = {
  telegram: {
    index: "01",
    name: "Telegram",
    url: "https://t.me/investments_worldwide",
    description:
      "Реальная картина рынков миграции и инвестиций. От глобальных рейтингов до нюансов «золотых виз» и скрытых рисков при покупке недвижимости. Тщательно отобранные редакцией ежедневные сводки, сравнительные таблицы и концентрат фактов для защиты вашего капитала.",
  },
  instagram: {
    index: "02",
    name: "Instagram",
    url: "https://www.instagram.com/shagaya.poplanete/",
    description:
      "Фотообзоры, стоимость жизни и видеоформаты с реальными цифрами (например, надежный «План Б» за $100 000).",
  },
  facebook: {
    index: "03",
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61593117163162",
    description:
      "Ключевые страны, емкие описания и короткие ролики, доказывающие, что легальная релокация доступнее, чем кажется.",
  },
  linkedin: {
    index: "04",
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/shagaya-po-planete-investments-worldwide/",
    description:
      "Макроэкономическая статистика, обзоры законодательства и юридические нюансы. Площадка для владельцев бизнеса, топ-менеджеров и B2B-нетворкинга.",
  },
};

const orbit = document.querySelector(".orbit-system");
const nodes = document.querySelectorAll(".resource-node");
const resourceIndex = document.querySelector("#resource-index");
const resourceName = document.querySelector("#resource-name");
const resourceDescription = document.querySelector("#resource-description");
const resourceLink = document.querySelector("#resource-link");
const resourceIcons = document.querySelectorAll("[data-channel-icon]");

function activateResource(resourceId) {
  const resource = resources[resourceId];

  if (
    !resource ||
    !orbit ||
    !resourceIndex ||
    !resourceName ||
    !resourceDescription ||
    !resourceLink
  ) {
    return;
  }

  orbit.dataset.active = resourceId;
  resourceIndex.textContent = resource.index;
  resourceName.textContent = resource.name;
  resourceDescription.textContent = resource.description;
  resourceLink.href = resource.url;
  resourceLink.setAttribute("aria-label", `Перейти в канал ${resource.name}`);

  resourceIcons.forEach((icon) => {
    icon.hidden = icon.dataset.channelIcon !== resourceId;
  });

  nodes.forEach((node) => {
    node.setAttribute(
      "aria-pressed",
      String(node.dataset.resource === resourceId),
    );
  });
}

nodes.forEach((node) => {
  const selectNode = () => activateResource(node.dataset.resource);

  node.addEventListener("click", selectNode);
  node.addEventListener("mouseenter", selectNode);
  node.addEventListener("focus", selectNode);
});
