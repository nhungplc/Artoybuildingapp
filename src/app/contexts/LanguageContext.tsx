import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'vi' | 'zh' | 'fr';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

export const translations: Translations = {
  // Common / Welcome
  'Where Building Meets Imagination': {
    en: 'Where Building Meets Imagination',
    vi: 'Nơi lắp ráp gặp gỡ trí tưởng tượng',
    zh: '搭建与想象力交汇之处',
    fr: 'Où la construction rencontre l\'imagination',
  },
  'Turn building into an interactive AR adventure.': {
    en: 'Turn building into an interactive AR adventure.',
    vi: 'Biến việc lắp ráp thành chuyến phiêu lưu AR tương tác.',
    zh: '将搭建变成互动的AR冒险。',
    fr: 'Transformez la construction en une aventure AR interactive.',
  },
  'Start Building': {
    en: 'Start Building',
    vi: 'Bắt đầu xây dựng',
    zh: '开始搭建',
    fr: 'Commencer la construction',
  },
  'Create an account': {
    en: 'Create an account',
    vi: 'Tạo tài khoản',
    zh: '创建账户',
    fr: 'Créer un compte',
  },
  'Upload Image': {
    en: 'Upload Image',
    vi: 'Tải ảnh lên',
    zh: '上传图片',
    fr: 'Télécharger une image',
  },
  'Create Animation': {
    en: 'Create Animation',
    vi: 'Tạo hiệu ứng',
    zh: '生成动画',
    fr: 'Créer une animation',
  },
  
  // Auth
  'Continue with Apple': {
    en: 'Continue with Apple',
    vi: 'Tiếp tục với Apple',
    zh: '通过 Apple 继续',
    fr: 'Continuer avec Apple',
  },
  'Continue with Google': {
    en: 'Continue with Google',
    vi: 'Tiếp tục với Google',
    zh: '通过 Google 继续',
    fr: 'Continuer avec Google',
  },
  'Continue with Email': {
    en: 'Continue with Email',
    vi: 'Tiếp tục với Email',
    zh: '通过电子邮件继续',
    fr: 'Continuer avec Email',
  },
  'Continue with SSO': {
    en: 'Continue with SSO',
    vi: 'Tiếp tục với SSO',
    zh: '通过 SSO 继续',
    fr: 'Continuer avec SSO',
  },
  'Already have an account?': {
    en: 'Already have an account?',
    vi: 'Đã có tài khoản?',
    zh: '已有账户？',
    fr: 'Vous avez déjà un compte ?',
  },
  'Log in': {
    en: 'Log in',
    vi: 'Đăng nhập',
    zh: '登录',
    fr: 'Connexion',
  },
  'Welcome Builder': {
    en: 'Welcome Builder',
    vi: 'Chào mừng Nhà xây dựng',
    zh: '欢迎，搭建者',
    fr: 'Bienvenue Bâtisseur',
  },
  'Create an account to start building your AR creations.': {
    en: 'Create an account to start building your AR creations.',
    vi: 'Tạo tài khoản để bắt đầu xây dựng các tác phẩm AR của bạn.',
    zh: '创建账户以开始搭建您的AR作品。',
    fr: 'Créez un compte pour commencer à construire vos créations AR.',
  },
  'First Name': { en: 'First Name', vi: 'Tên', zh: '名字', fr: 'Prénom' },
  'Last Name': { en: 'Last Name', vi: 'Họ', zh: '姓氏', fr: 'Nom' },
  'Email Address': { en: 'Email Address', vi: 'Địa chỉ Email', zh: '电子邮件', fr: 'Adresse e-mail' },
  'Password': { en: 'Password', vi: 'Mật khẩu', zh: '密码', fr: 'Mot de passe' },
  'Continue': { en: 'Continue', vi: 'Tiếp tục', zh: '继续', fr: 'Continuer' },
  'Type here...': { en: 'Type here...', vi: 'Nhập vào đây...', zh: '在此输入...', fr: 'Tapez ici...' },
  
  // Navigation
  'Home': { en: 'Home', vi: 'Trang chủ', zh: '主页', fr: 'Accueil' },
  'AR Build': { en: 'AR Build', vi: 'Xây dựng AR', zh: 'AR 搭建', fr: 'Construction AR' },
  'Missions': { en: 'Missions', vi: 'Nhiệm vụ', zh: '任务', fr: 'Missions' },
  'Create': { en: 'Create', vi: 'Sáng tạo', zh: '创造', fr: 'Créer' },
  'Profile': { en: 'Profile', vi: 'Hồ sơ', zh: '个人资料', fr: 'Profil' },

  // Home Screen
  'Welcome back,': { en: 'Welcome back,', vi: 'Chào mừng trở lại,', zh: '欢迎回来，', fr: 'Bon retour,' },
  'Builder': { en: 'Builder', vi: 'Nhà xây dựng', zh: '搭建者', fr: 'Bâtisseur' },
  'Ready to build something new?': { en: 'Ready to build something new?', vi: 'Sẵn sàng xây dựng điều mới?', zh: '准备好搭建新东西了吗？', fr: 'Prêt à construire quelque chose de nouveau ?' },
  'Start': { en: 'Start', vi: 'Bắt đầu', zh: '开始', fr: 'Démarrer' },
  'Your Progress': { en: 'Your Progress', vi: 'Tiến độ của bạn', zh: '你的进度', fr: 'Vos Progrès' },
  'Models Built': { en: 'Models Built', vi: 'Mô hình đã xây', zh: '已搭建模型', fr: 'Modèles Construits' },
  'Missions Done': { en: 'Missions Done', vi: 'Nhiệm vụ đã hoàn thành', zh: '已完成任务', fr: 'Missions Terminées' },

  // Profile Screen
  'Level 4 Master Builder': { en: 'Level 4 Master Builder', vi: 'Thợ xây bậc thầy cấp 4', zh: '4级建造大师', fr: 'Maître Bâtisseur Niveau 4' },
  'Account Settings': { en: 'Account Settings', vi: 'Cài đặt tài khoản', zh: '账户设置', fr: 'Paramètres du Compte' },
  'Manage your profile & password': { en: 'Manage your profile & password', vi: 'Quản lý hồ sơ & mật khẩu', zh: '管理您的个人资料和密码', fr: 'Gérez votre profil & mot de passe' },
  'Log Out': { en: 'Log Out', vi: 'Đăng xuất', zh: '登出', fr: 'Déconnexion' },

  // Feature 1
  'AR Builder': { en: 'AR Builder', vi: 'Bộ dựng AR', zh: 'AR 搭建器', fr: 'Constructeur AR' },
  'Scan your physical toys and see what you can build!': { en: 'Scan your physical toys and see what you can build!', vi: 'Quét đồ chơi vật lý của bạn và xem bạn có thể làm gì!', zh: '扫描您的实体玩具，看看您能搭建什么！', fr: 'Scannez vos jouets physiques et voyez ce que vous pouvez construire !' },
  'Start Scan': { en: 'Start Scan', vi: 'Bắt đầu quét', zh: '开始扫描', fr: 'Démarrer le Scan' },
  'Watch Demo': { en: 'Watch Demo', vi: 'Xem Demo', zh: '观看演示', fr: 'Voir la Démo' },
  '12 Pieces Found': { en: '12 Pieces Found', vi: 'Đã tìm thấy 12 mảnh', zh: '找到 12 个零件', fr: '12 Pièces Trouvées' },
  'Open Library': { en: 'Open Library', vi: 'Mở Thư viện', zh: '打开库', fr: 'Ouvrir la Bibliothèque' },
  'Model Library': { en: 'Model Library', vi: 'Thư viện mô hình', zh: '模型库', fr: 'Bibliothèque de Modèles' },
  'What will we build today?': { en: 'What will we build today?', vi: 'Hôm nay chúng ta sẽ xây gì?', zh: '今天我们要搭建什么？', fr: 'Qu\'allons-nous construire aujourd\'hui ?' },
  'pieces': { en: 'pieces', vi: 'mảnh', zh: '零件', fr: 'pièces' },
  'Bridge': { en: 'Bridge', vi: 'Cây cầu', zh: '桥', fr: 'Pont' },
  'House': { en: 'House', vi: 'Ngôi nhà', zh: '房子', fr: 'Maison' },
  'Car': { en: 'Car', vi: 'Xe hơi', zh: '汽车', fr: 'Voiture' },
  'Robot': { en: 'Robot', vi: 'Robot', zh: '机器人', fr: 'Robot' },
  'Tower': { en: 'Tower', vi: 'Tháp', zh: '塔', fr: 'Tour' },
  'Step 1 of 12': { en: 'Step 1 of 12', vi: 'Bước 1/12', zh: '第 1 步，共 12 步', fr: 'Étape 1 sur 12' },
  'Attach the wheel': { en: 'Attach the wheel', vi: 'Lắp bánh xe', zh: '安装轮子', fr: 'Attachez la roue' },
  'Find the blue wheel piece and snap it onto the front axle.': { en: 'Find the blue wheel piece and snap it onto the front axle.', vi: 'Tìm mảnh bánh xe màu xanh và lắp nó vào trục trước.', zh: '找到蓝色车轮部件并将其卡在前轴上。', fr: 'Trouvez la pièce de roue bleue et fixez-la sur l\'essieu avant.' },
  'Skip': { en: 'Skip', vi: 'Bỏ qua', zh: '跳过', fr: 'Passer' },
  'Next Step': { en: 'Next Step', vi: 'Bước tiếp theo', zh: '下一步', fr: 'Étape Suivante' },
  'Great job!': { en: 'Great job!', vi: 'Làm tốt lắm!', zh: '干得好！', fr: 'Bon travail !' },
  'Model completed.': { en: 'Model completed.', vi: 'Đã hoàn thành mô hình.', zh: '模型已完成。', fr: 'Modèle terminé.' },
  'Awesome!': { en: 'Awesome!', vi: 'Tuyệt vời!', zh: '太棒了！', fr: 'Génial !' },

  // Feature 2
  'Complete challenges to earn badges!': { en: 'Complete challenges to earn badges!', vi: 'Hoàn thành thử thách để nhận huy hiệu!', zh: '完成挑战以获得徽章！', fr: 'Terminez des défis pour gagner des badges !' },
  'Strongest Bridge': { en: 'Strongest Bridge', vi: 'Cây cầu vững nhất', zh: '最坚固的桥', fr: 'Pont le Plus Solide' },
  'Tall Tower': { en: 'Tall Tower', vi: 'Tháp cao', zh: '高塔', fr: 'Tour Haute' },
  'Creative House': { en: 'Creative House', vi: 'Ngôi nhà sáng tạo', zh: '创意房子', fr: 'Maison Créative' },
  'Play Now': { en: 'Play Now', vi: 'Chơi ngay', zh: '立即游玩', fr: 'Jouer Maintenant' },
  'Select a level': { en: 'Select a level', vi: 'Chọn cấp độ', zh: '选择级别', fr: 'Sélectionnez un niveau' },
  'Simple Bridge': { en: 'Simple Bridge', vi: 'Cầu đơn giản', zh: '简单的桥', fr: 'Pont Simple' },
  'Build a bridge that spans 10 inches.': { en: 'Build a bridge that spans 10 inches.', vi: 'Xây một cây cầu dài 10 inch.', zh: '搭建一座跨度 10 英寸的桥。', fr: 'Construisez un pont de 10 pouces d\'envergure.' },
  'Sturdy Bridge': { en: 'Sturdy Bridge', vi: 'Cầu vững chắc', zh: '坚固的桥', fr: 'Pont Robuste' },
  'Must hold the weight of 5 toy cars.': { en: 'Must hold the weight of 5 toy cars.', vi: 'Phải chịu được trọng lượng của 5 xe đồ chơi.', zh: '必须能承受 5 辆玩具车的重量。', fr: 'Doit supporter le poids de 5 petites voitures.' },
  'Master Bridge': { en: 'Master Bridge', vi: 'Cầu bậc thầy', zh: '大师级桥', fr: 'Pont de Maître' },
  'Build a suspension bridge with towers.': { en: 'Build a suspension bridge with towers.', vi: 'Xây một cây cầu treo với các tháp.', zh: '建造一座有塔楼的悬索桥。', fr: 'Construisez un pont suspendu avec des tours.' },
  'Hint': { en: 'Hint', vi: 'Gợi ý', zh: '提示', fr: 'Indice' },
  'Here is a clue!': { en: 'Here is a clue!', vi: 'Đây là một manh mối!', zh: '这是个线索！', fr: 'Voici un indice !' },
  'Try building arches to support the weight in the middle of your bridge.': { en: 'Try building arches to support the weight in the middle of your bridge.', vi: 'Thử xây các vòm để chịu lực ở giữa cầu.', zh: '尝试建造拱门来支撑桥中间的重量。', fr: 'Essayez de construire des arches pour supporter le poids au milieu de votre pont.' },
  'Align your build in frame': { en: 'Align your build in frame', vi: 'Căn chỉnh công trình vào khung', zh: '在框架中对齐你的建筑', fr: 'Alignez votre construction dans le cadre' },
  'Mission Complete!': { en: 'Mission Complete!', vi: 'Hoàn thành nhiệm vụ!', zh: '任务完成！', fr: 'Mission Terminée !' },
  'Save to Collection': { en: 'Save to Collection', vi: 'Lưu vào Bộ sưu tập', zh: '保存到收藏', fr: 'Sauvegarder dans la Collection' },
  'Retake Photo': { en: 'Retake Photo', vi: 'Chụp lại ảnh', zh: '重新拍照', fr: 'Reprendre la Photo' },

  // Feature 3
  'Create & Animate': { en: 'Create & Animate', vi: 'Sáng tạo & Tạo hiệu ứng', zh: '创造与动画', fr: 'Créer & Animer' },
  'Bring your physical builds to life with AR magic!': { en: 'Bring your physical builds to life with AR magic!', vi: 'Biến công trình vật lý thành sự sống với phép thuật AR!', zh: '用 AR 魔法让你的实体拼搭栩栩如生！', fr: 'Donnez vie à vos constructions physiques avec la magie AR !' },
  'Upload': { en: 'Upload', vi: 'Tải lên', zh: '上传', fr: 'Télécharger' },
  'Capture': { en: 'Capture', vi: 'Chụp ảnh', zh: '拍照', fr: 'Capturer' },
  'Saved Animations': { en: 'Saved Animations', vi: 'Hiệu ứng đã lưu', zh: '已保存动画', fr: 'Animations Sauvegardées' },
  'Flying Car': { en: 'Flying Car', vi: 'Xe bay', zh: '飞行汽车', fr: 'Voiture Volante' },
  'Space Robot': { en: 'Space Robot', vi: 'Robot không gian', zh: '太空机器人', fr: 'Robot Spatial' },
  'Magic Castle': { en: 'Magic Castle', vi: 'Lâu đài phép thuật', zh: '魔法城堡', fr: 'Château Magique' },
  'Super Tower': { en: 'Super Tower', vi: 'Siêu tháp', zh: '超级塔', fr: 'Super Tour' },
  'Add Magic': { en: 'Add Magic', vi: 'Thêm phép thuật', zh: '添加魔法', fr: 'Ajouter de la Magie' },
  'Original Photo': { en: 'Original Photo', vi: 'Ảnh gốc', zh: '原图', fr: 'Photo Originale' },
  'What should it do?': { en: 'What should it do?', vi: 'Nó nên làm gì?', zh: '它应该做什么？', fr: 'Que devrait-il faire ?' },
  'Describe the magical animation you want to see.': { en: 'Describe the magical animation you want to see.', vi: 'Mô tả hiệu ứng phép thuật bạn muốn xem.', zh: '描述你想看到的魔法动画。', fr: 'Décrivez l\'animation magique que vous voulez voir.' },
  'AR Magic': { en: 'AR Magic', vi: 'Phép thuật AR', zh: 'AR 魔法', fr: 'Magie AR' },
  'Stop Animation': { en: 'Stop Animation', vi: 'Dừng hiệu ứng', zh: '停止动画', fr: 'Arrêter l\'Animation' },
  'Play Animation': { en: 'Play Animation', vi: 'Phát hiệu ứng', zh: '播放动画', fr: 'Jouer l\'Animation' },
  'Next': { en: 'Next', vi: 'Tiếp', zh: '下一个', fr: 'Suivant' },
  'It\'s Alive!': { en: 'It\'s Alive!', vi: 'Nó đang sống!', zh: '它活了！', fr: 'C\'est Vivant !' },
  'Your magical animation looks amazing.': { en: 'Your magical animation looks amazing.', vi: 'Hiệu ứng phép thuật của bạn trông thật tuyệt vời.', zh: '你的魔法动画看起来棒极了。', fr: 'Votre animation magique est incroyable.' },
  'Share': { en: 'Share', vi: 'Chia sẻ', zh: '分享', fr: 'Partager' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
